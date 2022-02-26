
import edits from '../images/vectors/orange/edits.png'
import moodboard from '../images/vectors/orange/moodboard.png'
import swatch from '../images/vectors/orange/swatch.png'
import applied from '../images/vectors/orange/applied.png'

import { Pattern } from '.'

export default function BloodOrangePattern() {
  return (
    <Pattern
      title="blood orange"
      titleBGColor='#8C030E'
      titleColor="#F2F2F2"
      moodboard={moodboard}
      swatches={[swatch]}
      appliedPatterns={[applied]}
      edits={edits}
      footerBGColor="#40010D"
      photographers={[
        {
          href: "https://unsplash.com/@bradencollum?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
          name: "Braden Collum"
        },
        {
          href: "https://unsplash.com/@neonbrand?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
          name: "NeONBRAND"
        },
        {
          href: "https://unsplash.com/@jacksondavid?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
          name: "Jackson David"
        },
      ]}
    />
  )
}