
export default function QuoteSection() {
    return (
        <div className="section quote px-8 py-4 md:px-12">
                
            <p className="quote-text text-lg leading-relaxed text-[var(--text-color)] flex items-start">
                {`"Food is everything we are. It's an extension of nationalist feeling, 
                ethnic feeling, your personal history, your province, your region, 
                your tribe, your grandma. It's inseparable from those from the get-go."`}
            </p>
               
            <p className="quote-author text-[var(--text-light)] text-right mt-4">
                {`- Anthony Bourdain`}
            </p>
        </div>
    );
}
