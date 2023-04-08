
import Title from "./Title"
import FlatItem from "./FlatItem"

const FlatList = () => {
    const title = {
        text: "Explore the listings near you",
        description: "Check out the properties"
    }
    return (
        <section className="section-all-re">
            <div className="container">
                <Title title={title.text} description={title.description} />
                <div className="row">
                    <FlatItem slug="lorem-ipsum-1" />
                    <FlatItem slug="lorem-ipsum-2" />
                    <FlatItem slug="lorem-ipsum-3" />
                    <FlatItem slug="lorem-ipsum-4" />
                    <FlatItem slug="lorem-ipsum-5" />
                    <FlatItem slug="lorem-ipsum-6" /> 
                    <FlatItem slug="lorem-ipsum-7" />
                    <FlatItem slug="lorem-ipsum-8" />
                    <FlatItem slug="lorem-ipsum-9" />  
                </div>
            </div>
        </section>
    )

}

export default FlatList;