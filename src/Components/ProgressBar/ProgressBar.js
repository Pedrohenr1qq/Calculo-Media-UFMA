import './ProgressBar.css'

function createProgressBar(){
    return(
        <div className="progress-bar">
            <div id="loader"></div>
        </div>
    );
}

export default createProgressBar;