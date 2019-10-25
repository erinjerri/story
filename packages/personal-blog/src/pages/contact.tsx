import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Contact from "../containers/Contact"

type ContactPageProps = {}

const ContactPage: React.FunctionComponent<ContactPageProps> = props => {
  return (
    <Layout>
      <SEO
        title="Contact Me"
        description="Book me to speak for O'Reilly Media Creating ARVR, email creatingarvr@gmailcom."
      />

      <Contact />
    </Layout>
  )
}

export default ContactPage
