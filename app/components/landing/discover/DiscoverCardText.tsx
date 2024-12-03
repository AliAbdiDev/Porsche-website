function DiscoverCardText(
    { title, description }: { title: string, description: string }
) {
    return (
        <span className="block mb-2 space-y-1">
            <p >Pursche Brand</p>

            <h4 className="card-title font-semibold">{title}</h4>

            <p className="pt-2">
                {description}
            </p>

        </span>
    );
}

export default DiscoverCardText;