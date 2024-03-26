export default function Page({ params }) {
    throw new Error("error occured")
    let languages=["Java", "Python","Javascript","C++"]
    if(languages.includes(params.slug)){
        return <div>
            My Post: {params.slug} 
        </div>
    }
    else{
        return <div>Post not found</div>
    }
    return <div>My Post: {params.slug}</div>
  }