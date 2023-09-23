import { useEffect, useState } from "react";
import Category from "../Category/Category";


const JobCategories = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div className="bg-white my-32">
            <div className="text-center">
                <h2 className="text-5xl font-extrabold mb-4">Job Category List</h2>
                <p className="text-base font-medium mb-8">Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className="flex gap-6 container mx-auto">
                    {
                        categories.map(category => <Category key={category.id} category={category}></Category>)
                    }
                </div>
            </div>
        </div>
    );
};

export default JobCategories;