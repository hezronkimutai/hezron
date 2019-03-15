import React from 'react'
const GOOGLE_BUTTON_ID = 'google-sign-in-button';
export default class Signin extends React.Component {
  componentDidMount() {
    window.gapi.signin2.render(
      GOOGLE_BUTTON_ID,
      {
        width: 200,
        height: 50,
        onsuccess: this.onSuccess,
      },
    );
  }
  onSuccess(googleUser) {
    const profile = googleUser.getBasicProfile();
    console.log("Name: " + profile.getName());
  }
  render() {
    return (
      <div id={GOOGLE_BUTTON_ID}/>
    );
  }
}
