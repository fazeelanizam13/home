
import edits from '../images/vectors/gestures/edits.png'
import moodboard from '../images/vectors/gestures/moodboard.png'
import swatch1 from '../images/vectors/gestures/1swatch.png'
import swatch2 from '../images/vectors/gestures/2swatch.png'
import applied1 from '../images/vectors/gestures/1applied.png'
import applied2 from '../images/vectors/gestures/2applied.png'

import { Pattern } from '.'

export default function GesturesPattern() {
  return (
    <Pattern
      title="gestures"
      titleBGColor='#517339'
      titleColor="#F2F2F2"
      moodboard={moodboard}
      swatches={[swatch1, swatch2]}
      appliedPatterns={[applied1, applied2]}
      edits={edits}
      footerBGColor="#262322"
      photographers={[
        {
          href: "https://unsplash.com/@katemacate?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
          name: "Kate Macate"
        },
        {
          href: "https://unsplash.com/@pixelcolours?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
          name: "Bec R."
        },
        {
          href: "https://unsplash.com/@michellem18?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
          name: "Michelle McEwen"
        },
      ]}
    />
  )
}