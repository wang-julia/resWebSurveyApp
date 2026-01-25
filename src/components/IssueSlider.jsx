function IssueSlider({ issueId, value, onChange }) {
    return(
        <div className = "issue-slider">
            <label>
                Issue {issueId}: <strong>{value}</strong>
            </label>

            <input
                type = "range"
                min = "1"
                max = "10"
                step = "1"
                value = {value}
                onChange = {(e) => onChange(issueId, Number(e.target.value))}
            />
        </div>
    );
}

export default IssueSlider;