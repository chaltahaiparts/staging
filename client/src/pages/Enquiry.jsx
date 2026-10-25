import React from 'react'
import axios from 'axios'

const inputClass =
  "px-3 py-2.5 text-sm text-slate-900 w-full rounded-md bg-white outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600";
const socialClass =
  "flex items-center bg-slate-200 w-8 h-8 p-2 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500";

export default function Enquiry() {

let [formData, setFormData] = React.useState({
  name: '',
  email: '',
  phone: '',
  message: '',
  index: ''
});
let [sent, setSent] = React.useState(false);
let [error, setError] = React.useState('');

function handleSubmit(e) {
  e.preventDefault();
  setError('');
  let { name, email, phone, message } = formData;

  axios.post('http://localhost:3000/web/api/user-enquiry/insert', { name, email, phone, message })
    .then(() => {
      setSent(true);
      setFormData({ name: '', email: '', phone: '', message: '', index: '' });
      setTimeout(() => setSent(false), 4000);
    })
    .catch(() => setError('Could not send your message. Please try again.'));

}

  return (
    <section className="rounded-xl border border-slate-200 bg-white p-6 md:p-10 shadow-sm">
      <div className="grid md:grid-cols-2 items-start gap-16 mx-auto max-w-5xl">
        <div>
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 md:text-4xl">Let's Talk</h2>
            <p className="text-base leading-relaxed text-slate-600 text-left">
              Have some big idea or brand to develop and need help? Then reach out, we'd love to hear about your
              project and provide help.
            </p>
          </div>

          <div className="mt-12">
            <h3 className="text-slate-900 text-base font-semibold">Email</h3>
            <ul className="mt-4">
              <li className="flex items-center">
                <div className="flex items-center bg-slate-200 w-8 h-8 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="fill-current text-slate-600"
                    stroke="currentColor" viewBox="0 0 682.667 682.667" aria-hidden="true">
                    <defs>
                      <clipPath id="a" clipPathUnits="userSpaceOnUse">
                        <path d="M0 512h512V0H0Z" />
                      </clipPath>
                    </defs>
                    <g clipPath="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
                      <path fill="none" strokeMiterlimit="10" strokeWidth="40"
                        d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z" />
                      <path
                        d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z" />
                    </g>
                  </svg>
                </div>
                <a href="mailto:info@example.com" className="text-sm ml-4">
                  <small className="block text-slate-900">Mail</small>
                  <span className="font-semibold text-blue-600">info@example.com</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="mt-8">
            <h3 className="text-slate-900 text-base font-semibold">Socials</h3>
            <ul className="flex flex-wrap gap-4 mt-4">
              <li>
                <a href="#facebook" className={socialClass} aria-label="Facebook">
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-full fill-slate-600"
                    viewBox="0 0 155.139 155.139" aria-hidden="true">
                    <path d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761z" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#linkedin" className={socialClass} aria-label="LinkedIn">
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-full fill-slate-600"
                    viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 0 0 2.882 0" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#x" className={socialClass} aria-label="X">
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-full fill-slate-600"
                    viewBox="0 0 1226.37 1226.37" aria-hidden="true">
                    <path d="M727.348 519.284 1174.075 0h-105.86L680.322 450.887 370.513 0H13.185l468.492 681.821L13.185 1226.37h105.866l409.625-476.152 327.181 476.152h357.328L727.322 519.284zM582.35 687.828l-47.468-67.894-377.686-540.24H319.8l304.797 435.991 47.468 67.894 396.2 566.721H905.661L582.35 687.854z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {sent && (
            <div role="alert" className="flex items-center justify-between rounded-md border border-green-300 bg-green-50 px-4 py-3 text-sm text-green-800">
              <span>Message sent successfully!</span>
              <button type="button" onClick={() => setSent(false)} aria-label="Close" className="ml-4 text-lg leading-none cursor-pointer">&times;</button>
            </div>
          )}
          {error && (
            <div role="alert" className="rounded-md border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-800">{error}</div>
          )}
          <div>
            <label htmlFor="name" className="mb-2 text-slate-900 font-medium text-sm inline-block">Name</label>
            <input type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} id="name" name="name" placeholder="John doe" className={inputClass} />
          </div>
          <div>
            <label htmlFor="email" className="mb-2 text-slate-900 font-medium text-sm inline-block">Email</label>
            <input type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} id="email" name="email" placeholder="john@example.com" className={inputClass} />
          </div>
          <div>
            <label htmlFor="phone" className="mb-2 text-slate-900 font-medium text-sm inline-block">Phone number</label>
            <input type="tel" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} id="phone" name="phone" placeholder="+11800-259-854" className={inputClass} />
          </div>
          <div>
            <label htmlFor="message" className="mb-2 text-slate-900 font-medium text-sm inline-block">Message</label>
            <textarea value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} id="message" name="message" rows="6" placeholder="Write message" className={inputClass}></textarea>
          </div>

          <button type="submit"
            className="py-2.5 px-4 text-sm rounded-md font-semibold cursor-pointer text-white border border-blue-600 bg-blue-600 hover:bg-blue-700 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
            Send message
          </button>
        
            


        </form>
      </div>
    </section>
  )
}
