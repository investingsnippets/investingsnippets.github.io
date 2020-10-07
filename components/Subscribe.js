import Link from "next/link";
import { Component } from 'react'
import 'isomorphic-fetch'


class Subscribe extends Component {
  constructor (props) {
    super(props)
    this.state = {
      values: {
        email: "", // entry.1180315201
        // register: "" , // entry.1842903919
      },
      submitting: false,
      submitted: false
    }
    this.submitForm = this.submitForm.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange = e =>
    this.setState({
      values: { ...this.state.values, [e.target.name]: e.target.value }
    });

  submitForm = e => {
      e.preventDefault();
      this.setState({ isSubmitting: true });
      fetch("https://forms.gle/2p1kgzpDNjqKmJ1J8/formResponse", {
        method: "POST",
        mode: 'no-cors',
        // body: JSON.stringify(this.state.values),
        body: JSON.stringify({
          'emailAddress': 'xp@g.com',
          'entry.1842903919': false
        }),
        headers: {
            "Content-Type": "text/html; charset=utf-8",
            'Accept': '*/*',
            'Accept-Language': 'en-GB',
            'Accept-Encoding': 'gzip, deflate',
            'Connection': 'Keep-alive',
        }
      })
      .then(res => {
          this.setState({ isSubmitting: false });
          console.log(res.status)
          console.log(res.ok)
          return res.text();
      })
      .then(data => {
          console.log(data);
          // !data.hasOwnProperty("error")
          //     ? this.setState({ message: data.success })
          //     : this.setState({ message: data.error, isError: true });
      });
  }

  render () {
    const {values} = this.state
    return (
      <content>
        <h5 className="font-semibold text-lg uppercase text-gray-700 mb-2"> Subscribe </h5>
        <p className="text-gray-600">
          Receive the next blog article directly to your email!
        </p>
        <form onSubmit={this.submitForm}>
          <input
            type="email"
            name="email"
            id="email"
            value={values.email}
            onChange={this.handleInputChange}
            title="Email"
            required
            placeholder="your email address"
            className="text-gray-700 bg-gray-100 rounded-t hover:outline-none p-2 w-full mt-4 border outline-none"
            disabled
          />
          <button
            type="submit"
            className="px-4 py-2 bg-orange-600 text-gray-200 rounded-b w-full capitalize tracking-wide"
            disabled
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
