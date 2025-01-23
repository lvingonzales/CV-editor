import EditButton from "./components/EditButton";
import Input from "./components/Input";
import TextArea from "./components/TextArea";
import SaveButton from "./components/SaveButton";
import "./sections.css";
import TextDisplay from "./components/TextDisplay";

export default function SectionGeneral() {
  return (
    <>
      <div className="section general">
        <div className="name">
          <TextDisplay />
          <Input id="name" label="Name:" className="hidden" />
        </div>
        <div className="contacts">
          <TextDisplay />
          <TextDisplay />
          <Input id="email" type="email" label="Email:" />
          <Input id="phone" label="Phone Number:" />
        </div>
        <div className="util">
          <EditButton />
          <SaveButton />
        </div>
      </div>

      <div className="section education">
        <div className="name">
          <TextDisplay />
          <Input id="school-name" label="School Name:" />
        </div>
        <div className="date">
          <TextDisplay />
          <TextDisplay />
          <Input id="school-date" type="date" label="From:" />
          <Input id="school-date" type="date" label="To:" />
        </div>
        <div className="info">
          <TextDisplay />
          <TextDisplay />
          <TextDisplay />
          <Input id="degree" label="Degree" />
          <Input id="major" label="Major:" />
          <Input id="minor" label="Minor:" />
        </div>
        <div className="util">
          <EditButton />
          <SaveButton />
        </div>
      </div>

      <div className="section experience">
        <div className="name">
          <TextDisplay />
          <Input id="work-name" label="Name of Current/ Previous Employer:" />
        </div>
        <div className="date">
          <TextDisplay />
          <TextDisplay />
          <Input id="work-date" type="date" label="From:" />
          <Input id="work-date" type="date" label="To:" />
        </div>
        <div className="info">
          <TextDisplay />
          <TextArea id="responsibilities" label="Responsibilities: " />
        </div>
        <div className="util">
          <EditButton />
          <SaveButton />
        </div>
      </div>
    </>
  );
}
