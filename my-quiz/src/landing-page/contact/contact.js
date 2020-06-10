import React from "react";
import contact from "./images/2 .png";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <h2 className="text-center pb-5 mb-5"> Contact</h2>
      <div className=" d-flex flex-lg-row flex-sm-column-reverse justify-content-between">
        <div className="contact__image">
          <img src={contact} alt="contact image" />
        </div>
        <div>
          <div className="contact__info-item d-flex flex-lg-row flex-md-column justify-content-md-center">
            <img
              className="contact__info-picture"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAACK0lEQVRoge2Yv2sUQRiG3zmDoqCiFmIwmC6CxaUS/QOECGJjsLCwNJWIlUWa/AOS2kqwEhW00MJCrCQ2QrAQQjAQEsUmhGxQUIxPit3AZDPf3u5ebu+QeWCb2fneeb/5ubNSJBKJRCI5gBHgBZDQfxLgJTAW8upC5iXNSzrZ646qyLqktnNuxS9sBSrOavDMS9IJSQ/zhaERSCQdbcJRDRLn3HG/IJQAuyo4t6dOk3TyE5pCeYHL+22qLMCFOkF5/gFPgFM98Gh5OAzMAL/zZsoEfzC2s+/AzQbMTwBfDQ9fygi0gClg3RB5A4z2wPgZ4KnR5i9gGjhYRfB0NnUswZlKgnY7DrgNrBltvQfOd9PAVWDJEJ8HLnahPQ58NLR/ALdqG881ZC4q0kX+CDhWQe9IB736m0YmfMh41y7osVXgRgn968CyofEZY9sGDgB3yyQAsAhcMd53mrOvgXOBuGFqrim/48omsDOUjwvqDZN+sYbYBO4DQ1nP3cP+si3c1YBZ4O9O5SoJlAoArmFPiU/ZE+IbMLnffqoHaNei/GOY9dmiwqJvJAEvtmiRQ7rtXqqo2VwCWXwLuANseDI/gQfAUA29ZhPwdM6SXgVfkd7y6uoU+vn/7wODTkyg38QE+k1MoN+ETsZNeT+2ujnMesBGviA0Au8aMFKXt/mC0Ek8JmlO6b/IQWJN0rhzbtUv3DMCzrkFSW1JzyUlzXgrJJH0TAHzkUgkEolsA8qe3HS6eiZHAAAAAElFTkSuQmCC"
              alt="gmail"
            />
            <span>
              <p className="contact__info-title"> EMAIL US ANYTIME </p>
              <p>
                We’re always happy to answer any questions. Write us at
                <span className="font-weight-bold pl-1 text-danger">
                  budz.marina97@gmail.com
                </span>
              </p>
            </span>
          </div>
          <div className="contact__info-item d-flex flex-lg-row flex-md-column justify-content-md-center">
            <img
              className="contact__info-picture"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAADqUlEQVRoge3ZTYhWVRzHcSedcSjKoRwb04oUWglNuEiTFom4iYKQFBKxkUSht2W0FlcVRmEl1KZ2FY1m9LKIpIW9DGhCRNrCipIgncleGHsZPy3u/+HexrnPc249z31mMb/lc3/nnO+59/z/55z/M2/enObUPeEejOECTmBtt5kqCX3Y71JNYFm3+ZKERfggwCfxMBbjUPz2TrcZWwpD+DyAf8Dqac/OxrMd3eRsKlyFYwH6JW6cwbM1nv+MG7rB2VRYiI8C8gtc08Q7OmuXGPYG3LdY3sI7hHPh314XY5IwHmB3Jvq3hX8cSzvNl6zYJ2CgQpu3o81oJ9kqCV8H1KoKbZZH0MOWTvIlqxDAWyu22xntTnaKrZJi04NXKrZbHO3+Rk+n+KoArcRF/IIrK7R7ICYy1km+SpIfS3Yn+vvxzaxLw9jcWO9YkOB/IvzHcVkdjEnCfNnRBHa18C7B+fBuqIsxWdgUcGdweRPfgfAdqpMvWejBpwH5ZImnH7+G58G6GZOFW/EnpnBHiefRmMgEbqqbMVnYUwj8S5ZYfLnD4fms2TLsqmRX3RMBur/EM1BIDgcxv27OJGFYdtWFkRLPSvwUngNmw+4+kzASkJO4rcSzthD8++pmTBaeLaTkGSsoWF/4ek/XzZgk9OLDgDxaFti4O7Id7K2bM0kYxOmAfBd9Jb77CpPZNytjBjfjx4B8rSxLxZdpLLMXZ2U2wy2xCcJLZW88YqaRAA7OtBxlZ7sR2aFzCqewufOzyAFux2+tAhtrCql5TKFOhg3yfWq63sC1dU1mI/5oTKbJl1kh3zTHZVfjwwXo09guu2nulJ+oz+L+uiZzb2EyLzeJmQG8Ne2tn8fj6J/mvV6WTBoaxVAdk9lYWGavK89mPXhEFjcvYEmLfnfIY/EctnVmBv8edF1h0Pc0v8csrNDvMnntTCzJ69pDXT7osDw1f6yN1ceIoUYldELJUaltku0zjWLE9+0cEEsLSeJ4u/ptNuAgjsSAF5Scmv9j31dHv7+3q89WA/biucLafr5Z3FTo97Ho72g7OKsMPCIvjp/Cuv/R1xp5qr+rnZypAMPyHXwKT+GKin2sKCSSZzrFmgLSJ6sB/BUwZ7BLWhFwEF9Fu/fRWwdzK6jV+KQQOyexW0mtWbbLN443x8p8XZFsh99UeMtkhfNXZX+0rpL9Pb4e3zXSrboOkVWFBdgiK5xfVK4jWNRt3iRFMD+ENyO7TcpOv3tUONLMaU5t1j8BnwlxhQFKiQAAAABJRU5ErkJggg=="
              alt="phone"
            />
            <span>
              <p className="contact__info-title">CHAT WITH US</p>
              <p>
                Want to talk in real time with our language proffessional
                <span className="font-weight-bold pl-1 text-danger">
                  03434335454346
                </span>
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
