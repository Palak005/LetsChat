const genderCheckBox = ()=>{
    return (
        <div className="flex gap-5 mb-3">
             <div className="form-control">
            <label className="label cursor-pointer">
                <span className="label-text">Female</span>
                <input type="checkbox" className="checkbox border-[#3C364C]" />
            </label>
            </div>
            <div className="form-control">
            <label className="label cursor-pointer">
                <span className="label-text">Male</span>
                <input type="checkbox"  className="checkbox border-[#3C364C]" />
            </label>
            </div>
        </div>
    )
}

export default genderCheckBox;