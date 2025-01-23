import Input from "./components/Input";
import "./sections.css";

export default function SectionGeneral() {
  return (
    <>
      <div className="section general">
        <div className="name">
          <Input id="name" label="Name:" />
        </div>
        <div className="contacts">
          <Input id="email" type="email" label="Email:" />
          <Input id="phone" label="Phone Number:" />
        </div>
      </div>

      <div className="section education"></div>
      <div className="section experience"></div>
    </>
  );
}
