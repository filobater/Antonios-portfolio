import Tech from './layout/Tech';

import Welcome from './layout/Welcome';
import Buttons from './layout/Buttons';

export const metadata = {
  title: 'Antonious Samy',
  description:
    'Let my work speak for itself. Browse my portfolio and discover the power of well-written code and thoughtful design to create impactful web experiences.',
};

export default function Home() {
  return (
    <>
      <Welcome />
      <Tech />
      <Buttons />
    </>
  );
}
