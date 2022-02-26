import header from '../images/mockups/hermosa/hermosa-branding-header.jpg'
import footer from '../images/mockups/hermosa/hermosa-branding-footer.jpg'
import styleGuide from '../images/mockups/hermosa/style-guide.png'
import assets from '../images/mockups/hermosa/assets.png'

import { Footer, Disclaimers, Fade } from "."

export default function HermosaBranding() {
  return (
<Fade show={true}>
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: '#f2f2f2',
      color: '#060606',
    }}>
      <div style={{
        backgroundImage: `url(${header})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '40vh',
        position: 'relative',
        width: '100%',
      }}>
        <h1 style={{
          position: 'absolute',
          bottom: 0,
          marginLeft: '2rem',
          color: '#f2f2f2'
        }}>branding  collateral for a clothing label</h1>
      </div>

      <h3>style guide</h3>

      <div style={{
        backgroundImage: `url(${styleGuide})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        width: '70vw',
        height: '70vw',
        // position: 'relative',
        // border: '1px solid red'
      }}></div>

      <h3>assets</h3>

      <div style={{
        backgroundImage: `url(${assets})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        width: '90vw',
        height: '102vw',
        // position: 'relative',
        // border: '1px solid red'
      }}></div>

      <div className="footer-wrapper" style={{
        backgroundImage: `url(${footer})`,
        backgroundPosition: 'center',
      }}>
        <Disclaimers
          usage="for creating project thumbnail, header and footer"
          photographers={[
            {
              href: "https://unsplash.com/@kellysikkema?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
              name: "Kelly Sikkema"
            },
            {
              href: "https://unsplash.com/@nordwood?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
              name: "NordWood Themes"
            },
            {
              href: "https://unsplash.com/@henmankk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
              name: "Keagan Henman"
            },
          ]}
        />
        <Footer />
      </div>
    </div></Fade>
  )
}