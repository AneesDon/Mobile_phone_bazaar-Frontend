import React from 'react'
import Container from '../Container'
import Input from '../Input'
import { ArrowRight } from 'lucide-react'

function ContactUs() {
  return (
    <Container>
        <section>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative flex items-end px-4 pb-10 pt-60 sm:px-6 sm:pb-16 md:justify-center lg:px-8 lg:pb-24">
          <div className="absolute inset-0">
            <img
              className="h-full w-full rounded-md object-cover object-top"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIyAJN01tTPfQj1n9f_K6k9MfudJiWBGDLTg&usqp=CAU"
              alt=""
            />
          </div>

          <div className="relative">
  
          </div>  
        </div>
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">Contact Us</h2>
            <p className="mt-2 text-sm text-gray-600">
              Let Us Khow What You Think About Us{' '}
            </p>
            <form action="#" method="POST" className="mt-8">
              <div className="space-y-5">
                <div>
                  <div className="mt-2">
                    <Input
                    label='Email Address'
                    placeholder='Enter Your Email Address'
                    />
                  </div>
                </div>
                <div>
                  <div className="mt-2">
                  <Input
                    label='Message'
                    placeholder='Tell us query'
                    type='textarea'
                    />
                  </div>
                </div>
                <div>
                  <button
                    type="button"
                    className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                  >
                    Send<ArrowRight className="ml-2" size={16} />
                  </button>
                </div>
              </div>
            </form>
     
          </div>
        </div>
      </div>
    </section>
    </Container>
  )
}

export default ContactUs