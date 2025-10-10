const Section = ({title, children, ...props}) => {
    return (
        // Forwarding props
        <section {...props}>
            <h2>{title}</h2>
            {children}
        </section>
    )
}

export default Section