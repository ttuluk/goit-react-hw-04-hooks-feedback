import { Feedback } from '../Feedback/Feedback';

const Section = ({ title }) => {
  return (
    <section>
      <h2>{title}</h2>
      <Feedback />
    </section>
  );
};

export default Section;
