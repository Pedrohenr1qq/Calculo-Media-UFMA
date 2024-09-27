import './Section.css';

const Section = (props) => {
    return(
        <section style={{height: props.height, width: props.width}}  className = {props.name}>
            {props.children}
        </section>
    );
}

export default Section;


