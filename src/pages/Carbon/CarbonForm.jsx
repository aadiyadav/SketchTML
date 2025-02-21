import { useState } from "react";

const CarbonForm = () => {
    const [formData, setFormData] = useState({
        familiarity: "",
        contributingFactors: [],
        eatingFrequency: "",
        meatType: "",
        localFood: "",
        foodWaste: "",
        dietaryChanges: "",
        sustainablePractices: [],
        carbonLabelImpact: "",
        simpleChange: ""
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === "checkbox") {
            setFormData((prev) => ({
                ...prev,
                [name]: checked
                    ? [...prev[name], value]
                    : prev[name].filter((item) => item !== value)
            }));
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Survey Data Submitted:", formData);
        alert("Thank you for your response!");
    };

    return (
        <div className="h-screen ">
            <br/>
        <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center text-center">
            <h2>Carbon Footprint & Food Choices Survey</h2>
            <br></br>
            <label>Before taking this survey, how familiar were you with the concept of carbon footprint related to food choices?</label>
            {["Very familiar", "Somewhat familiar", "Not familiar"].map((option) => (
                <label key={option}>
                    <input type="radio" name="familiarity" value={option} onChange={handleChange} /> {option}
                </label>
            ))}
            <br></br>
            <label>Which factors do you think contribute most to the carbon footprint of food? (Select up to 3)</label>
            {["Transportation", "Land use and deforestation", "Livestock emissions", "Food waste and disposal", "Fertilizers and pesticides", "Packaging and processing"].map((factor) => (
                <label key={factor}>
                    <input type="checkbox" name="contributingFactors" value={factor} onChange={handleChange} /> {factor}
                </label>
            ))}
            <br/>
            <label>How often do you consume animal-based products?</label>
            {["Daily", "A few times a week", "Once a week", "Rarely", "Never"].map((option) => (
                <label key={option}>
                    <input type="radio" name="eatingFrequency" value={option} onChange={handleChange} /> {option}
                </label>
            ))}
            <br/>
            <label>If you consume meat, which of these do you eat most frequently?</label>
            {["Beef & lamb", "Pork & chicken", "Fish & seafood", "I don’t eat meat"].map((option) => (
                <label key={option}>
                    <input type="radio" name="meatType" value={option} onChange={handleChange} /> {option}
                </label>
            ))}
            <br/>
            <label>How often do you eat locally produced food?</label>
            {["Almost always", "Sometimes", "Rarely", "Never"].map((option) => (
                <label key={option}>
                    <input type="radio" name="localFood" value={option} onChange={handleChange} /> {option}
                </label>
            ))}
            <br/>
            <label>Do you actively try to reduce food waste at home?</label>
            {["Yes", "Sometimes", "No"].map((option) => (
                <label key={option}>
                    <input type="radio" name="foodWaste" value={option} onChange={handleChange} /> {option}
                </label>
            ))}
            <br/>
            <label>Would you be willing to make dietary changes to reduce your carbon footprint?</label>
            {["Yes, I am already making changes", "Yes, but only if it’s affordable and convenient", "Maybe", "No"].map((option) => (
                <label key={option}>
                    <input type="radio" name="dietaryChanges" value={option} onChange={handleChange} /> {option}
                </label>
            ))}
            <br/>
            <label>Which sustainable food practices are you open to adopting? (Select all that apply)</label>
            {["Reducing red meat consumption", "Eating more plant-based meals", "Buying seasonal and local produce", "Choosing sustainably sourced seafood", "Reducing packaged & processed foods", "Composting food scraps"].map((practice) => (
                <label key={practice}>
                    <input type="checkbox" name="sustainablePractices" value={practice} onChange={handleChange} /> {practice}
                </label>
            ))}
            <br/>
            <label>If restaurants and grocery stores labeled carbon emissions for food items, would it influence your choices?</label>
            {["Yes, I would choose lower-carbon options", "Maybe, if the difference was significant", "No"].map((option) => (
                <label key={option}>
                    <input type="radio" name="carbonLabelImpact" value={option} onChange={handleChange} /> {option}
                </label>
            ))}
            <br/>
            <label>What’s one simple change you think everyone could make to reduce the environmental impact of their diet?</label>
            <textarea name="simpleChange" onChange={handleChange} />
            
            <button type="submit" className="h-10 w-20 bg-blue-500 rounded-xl borders">Submit</button>
            <br/>
        </form>
        </div>

  );
}

export default CarbonForm;