import { Footer, Disclaimers, Fade } from "."

export default function Pattern({ title, titleBGColor, titleColor, moodboard, swatches, appliedPatterns, edits, footerBGColor, photographers }) {
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
          backgroundColor: titleBGColor,
          color: titleColor,
          height: '25vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
        }}>
          <h1 style={{
            textAlign: 'center'
          }}>{title}</h1>
        </div>

        <h3>moodboard</h3>

        <div style={{
          backgroundImage: `url(${moodboard})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          width: '90vw',
          height: '40vw',
          // position: 'relative',
          // border: '1px solid red'
        }}></div>

        <h3>swatch/es</h3>

        <div style={{
          display: 'flex',
          flexDirection: 'column'
        }}>
          {
            swatches.map(swatch => (
              <div style={{
                backgroundImage: `url(${swatch})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                width: '20vw',
                height: '20vw',
                margin: '2rem'
                // position: 'relative',
                // border: '1px solid red'
              }}></div>
            ))
          }
        </div>

        <h3>pattern/s</h3>

        <div style={{
          display: 'flex',
          flexDirection: 'column'
        }}>
          {
            appliedPatterns.map(applied => (
              <div style={{
                backgroundImage: `url(${applied})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                width: '90vw',
                height: '45vw',
                margin: '2rem'
                // position: 'relative',
                // border: '1px solid red'
              }}></div>
            ))
          }
        </div>


        <h3></h3>

        <div style={{
          backgroundImage: `url(${edits})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          width: '90vw',
          height: '70vw',
          // position: 'relative',
          // border: '1px solid red'
        }}></div>

        <div className="footer-wrapper" style={{
          backgroundColor: footerBGColor,
          backgroundPosition: 'center',
        }}>
          <Disclaimers
            usage={`for demonstrating ${title} pattern usage`}
            photographers={photographers}
          />
          <Footer />
        </div>
      </div></Fade>
  )
}