import React from 'react'
import Script from 'next/script'
const contact = () => {
  return (
    <div>
      <Script>
        {`alert("Welcome to contact page");`}
      </Script>
        This is contact page
    </div>
  )
}

export default contact

export const metadata = {
  title: "Contact - Website",
  description: "This is website-made from next.js",
};