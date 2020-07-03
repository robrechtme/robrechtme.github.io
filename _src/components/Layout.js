export default function Layout(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="twelve columns">{props.children}</div>
            </div>
        </div>
    )
}