/* eslint-disable react/prop-types */


const Category = ({ category }) => {
    const { logo, category_name, availability } = category
    return (
        <div className="container mx-auto">
            <div className="p-10 bg-[#FAF8FF]">
                <div className="mb-8">
                    <img className="bg-[#EFECFF] p-4 rounded-lg" src={logo} alt="" />
                </div>
                <h1 className="text-start text-xl font-extrabold">{category_name}</h1>
                <p className="text-start text-base font-medium text-[#A3A3A3]">{availability}</p>
            </div>
        </div>
    );
};

export default Category;