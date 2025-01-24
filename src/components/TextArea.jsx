import "../Styles/input.css"

export default function TextArea ({id, label}) {
    return (
        <div className="inputWrapper">
            <label htmlFor={id}>{label}</label>
        
            <textarea name={id} id={id}></textarea>
        </div>
    );
}
