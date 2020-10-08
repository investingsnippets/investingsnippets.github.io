import Link from "next/link";
import { Component } from 'react'


class Subscribe extends Component {
  constructor (props) {
    super(props)
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm = e => {
    e.preventDefault();
    window.open('https://tinyletter.com/investingsnippets', 'popupwindow', 'scrollbars=yes,width=800,height=600');
    return true
  }

  render () {
    return (
      <content>
        <h5 className="font-semibold text-lg uppercase text-gray-700 mb-2"> Subscribe </h5>
        <p className="text-gray-600">
          Receive the next blog article directly to your email!
        </p>
        <form
          action="https://tinyletter.com/investingsnippets"
          method="post"
          target="popupwindow"
          // onSubmit={this.submitForm}
        >
          <input
            type="email"
            name="email"
            id="tlemail"
            title="Email"
            required
            placeholder="your email address"
            className="text-gray-700 bg-gray-100 rounded-t hover:outline-none p-2 w-full mt-4 border outline-none"
            // disabled
          />
          <input type="hidden" value="1" name="embed" />
          <button
            type="submit"
            className="px-4 py-2 bg-orange-600 text-gray-200 rounded-b w-full capitalize tracking-wide"
            // disabled
          >
            Subscribe
          </button>
        </form>
        <p className="text-gray-600 pt-2 text-xs text-center">
          or, follow the 
          {' '}
          <Link href="/feed.xml"><a>RSS feed</a></Link>
          !
        </p>
      </content>
    )
  }
}

export default Subscribe
