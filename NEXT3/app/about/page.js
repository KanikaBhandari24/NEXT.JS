import React from 'react'
import Script from 'next/script'
const about = () => {
  return (
    <div>
      <Script>
        {`alert("Welcome to about page");`}
      </Script>
        This is about page
    </div>
  )
}

export default about

export const metadata = {
  title: "About - Website",
  description: "This is website-made from next.js",
};