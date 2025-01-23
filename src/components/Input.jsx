import "./components.css";

export default function Input ({type = "text", id, label}) {
    return (
        <div className="inputWrapper">
            <label htmlFor={id}>{label}</label>
        
            <input type={type}  id={id}/>
        </div>
    );
}
