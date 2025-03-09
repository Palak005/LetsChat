const genderCheckBox = ({handleCheckboxChange , selectedGender})=>{
    return (
        <div className="flex gap-5 mb-3">
             <div className="form-control">
            <label className="label cursor-pointer">
                <span className="label-text">Female</span>
                <input type="checkbox" className="selected checkbox border-[#3C364C]" 
                    onChange={()=>{handleCheckboxChange("female")}}
                    checked={selectedGender==="female"}
                />
            </label>
            </div>
            <div className="form-control">
            <label className="label cursor-pointer">
                <span className="label-text">Male</span>
                <input type="checkbox" className="checkbox border-[#3C364C]" 
                    onChange={()=>{handleCheckboxChange("male")}}
                    checked={selectedGender==="male"}
                />
            </label>
            </div>
        </div>
    )
}

export default genderCheckBox;