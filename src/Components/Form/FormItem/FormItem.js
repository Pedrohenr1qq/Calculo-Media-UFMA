import './FormItem.css'

const FormItem = (props) => {
    return (
        <div className="form-itens">
            {props.children}
        </div>
    );
}

export default FormItem;