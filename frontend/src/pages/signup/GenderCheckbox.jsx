const GenderCheckBox = ({ handleCheckboxChange, selectedGender }) => {
    return (
        <div className="space-y-4">
            <span className="text-white font-semibold text-lg block">Gender</span>
            <div className="flex gap-8 justify-items-start">
                <label className="flex items-center gap-3 cursor-pointer">
                    <div className="relative">
                        <input 
                            type="checkbox" 
                            className="hidden" 
                            onChange={() => handleCheckboxChange("female")}
                            checked={selectedGender === "female"}
                        />
                        <div className={`w-6 h-6 border-2 border-white rounded flex items-center justify-center transition-all duration-300 ${
                            selectedGender === "female" ? "bg-white" : "bg-transparent"
                        }`}>
                            {selectedGender === "female" && (
                                <svg className="w-4 h-4 text-[#6D54B5]" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            )}
                        </div>
                    </div>
                    <span className="text-white text-lg">Female</span>
                </label>
                
                <label className="flex items-center gap-3 cursor-pointer">
                    <div className="relative">
                        <input 
                            type="checkbox" 
                            className="hidden" 
                            onChange={() => handleCheckboxChange("male")}
                            checked={selectedGender === "male"}
                        />
                        <div className={`w-6 h-6 border-2 border-white rounded flex items-center justify-center transition-all duration-300 ${
                            selectedGender === "male" ? "bg-white" : "bg-transparent"
                        }`}>
                            {selectedGender === "male" && (
                                <svg className="w-4 h-4 text-[#6D54B5]" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            )}
                        </div>
                    </div>
                    <span className="text-white text-lg">Male</span>
                </label>
            </div>
        </div>
    )
}

export default GenderCheckBox;