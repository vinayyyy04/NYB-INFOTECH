import Header from "./Title";
import Card from "./Card";
import Button from "./Button";

function ReusableAssests() {
  return (
    <>
      <Header companyName="NYB Infotech" />

      <Card
        title="Web Development"
        description="We create responsive and modern websites."
      />

      <Card
        title="React Development"
        description="We build reusable React applications."
      />

      <Button text="Learn More" />
      <Button text="Contact Us" />
    </>
  );
}

export default ReusableAssests;