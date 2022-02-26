
import edits from '../images/vectors/tea/edits.png'
import moodboard from '../images/vectors/tea/moodboard.png'
import swatch from '../images/vectors/tea/swatch.png'
import applied from '../images/vectors/tea/applied.png'

import { Pattern } from '.'

export default function ChamomileTeaPattern() {
  return (
    <Pattern
      title="chamomile tea"
      titleBGColor='#DDC71F'
      titleColor="#060606"
      moodboard={moodboard}
      swatches={[swatch]}
      appliedPatterns={[applied]}
      edits={edits}
      footerBGColor="#060606"
      photographers={[
        {
          href: "https://unsplash.com/@sjobjio?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
          name: "SJ Objio"
        },
        {
          href: "https://unsplash.com/@hudsoncrafted?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
          name: "Debby Hudson"
        },
        {
          href: "https://unsplash.com/@bookblock?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
          name: "Bookblock"
        },
      ]}
    />
  )
}