import '../styles/guidelines.css'

function Guidelines() {
    return (
        <div className="Guidelines_container">
            <div className="guideline-h"><h1>Submission Guidelines</h1></div>
            <div className="guideline-p"><p>Authors are invited to submit original research articles for the <span>SPARK Conference at KPR Institute of Engineering and Technology.</span> All papers must follow the <span>AIP Conference Standard</span> Format, and the official template can be downloaded from the provided link. Manuscripts should be written in clear English and properly structured. Submissions that do not follow the formatting guidelines will be rejected without review.</p></div>
            <div className="guideline-h"><h1>Manuscript Format</h1></div>
            <div className="guideline-p">
                <ul>
                    <li>Manuscripts must be submitted in <span>Microsoft Word format (.docx)</span> through the Google Form available on the conference website. Each submission should include the <span>title, author details, an abstract</span> (250–300 words), 3–5 relevant keywords, and a properly formatted reference list (IEEE or APA style). Papers should be 4–6 pages long, adhering strictly to the given template.</li>
                    <li>The conference has a <span>zero-tolerance policy for plagiarism.</span> All submissions will be checked for originality, and papers with a similarity index above <span>15% (excluding references)</span> will be immediately <span>rejected.</span> Authors must ensure their work is original and properly cited to avoid disqualification due to self-plagiarism or duplicate submissions.</li>
                    <li>All submitted papers will undergo a <span>double-blind peer review</span> based on originality, technical quality, research impact, and clarity. Accepted papers must be <span>registered</span>, and the <span>corresponding author</span> should complete the <span>e-Copyright transfer</span> and present the paper at the conference, either in person or virtually. Papers without presentation will not be included in the final proceedings.</li>
                </ul>
            </div>
            <button className="guideline-btn">Download Conference Template</button>
            <div className="guideline-h"><h1>Important to note</h1></div>
            <div className="guideline-p">
                <ol>
                    <li>Transfer of e-copyright and presenting paper in conference is mandatory.</li>
                    <li>Corresponding author (as per GoogleForm) keep checking their e-mail regularly (including spam) in this regard and for supplying any other desired information on time.</li>
                </ol>
            </div>
        </div>
    )
}

export default Guidelines;