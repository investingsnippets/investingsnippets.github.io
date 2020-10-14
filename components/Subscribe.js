import { Component } from 'react'
import * as gtag from 'utils/gtag'
import { getSiteMetaData, AppIcon } from "utils/helpers";

import {
  faRss
} from "@fortawesome/free-solid-svg-icons";


class Subscribe extends Component {
  constructor (props) {
    super(props)
    const siteMeta = getSiteMetaData();
    this.tinyletter = siteMeta.tinyletter;
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm = e => {
    e.preventDefault();
    gtag.event({
      action: 'submit_form',
      category: 'Subscribe',
      label: 'buttont_clicked',
    })
    window.open(`https://tinyletter.com/${this.tinyletter}`, 'popupwindow', 'scrollbars=yes,width=800,height=600');
    return true
  }

  render () {
    return (
      <content>
        <h5 className="font-semibold text-lg uppercase text-gray-700 mb-2"> Subscribe </h5>
        {this.tinyletter && (
        <>
          <p className="text-gray-600">
            Receive the next blog article directly to your email!
          </p>
          <form
            action={`https://tinyletter.com/${this.tinyletter}`}
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
              className="px-4 py-2 bg-orange-700 text-gray-200 rounded-b w-full capitalize tracking-wide"
              // disabled
            >
              Subscribe
            </button>
          </form>
          <p className="text-gray-600 pt-2 text-xs text-center">
            or, follow the 
            {' '}
            <AppIcon icon={faRss} link='/feed.xml' width='10px' />
          </p>
        </>
        ) || (
          <p className="pt-2 text-lg text-center">
            <AppIcon icon={faRss} link='/feed.xml' width='25px' />
          </p>
        )}
      </content>
    )
  }
}

export default Subscribe
