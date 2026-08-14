function Layout(props) {
    return (
        <div style = {{ width: props.width, height: props.height }}>
            <header>{props.header}</header>
            <main>{props.children}</main>
            <footer>{props.footer}</footer>
        </div>
    );
}

export {Layout};
