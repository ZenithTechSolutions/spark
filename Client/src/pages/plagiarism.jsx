import '../styles/plagiarism.css'

function Plagiarism() {
    return (
        <>
            <div className='plagiarism_cointainer'>
                <div className='plagiarism-h'><h1>Plagiarism Policy</h1></div>
                <div className="plagiarism-p"> Plagiarism is copying someone else's previous ideas, processes, results, or words without giving credit to the original author and source. It is a serious academic misconduct that undermines the principles of integrity, honesty, and intellectual rigor in scholarly endeavors. Someone commits plagiarism when they intentionally or knowingly replicate the work of others, or when they reproduce content without giving proper credit.<br /><br />If plagiarism is detected by the editorial board member, reviewer, editor etc., in any stage of article process- before or after acceptance, during editing or at a page proof stage. We will alert the same to the author(s) and will ask them to rewrite the content or to cite the references from where the content has been taken. If more than 10% of the paper is plagiarized- the article will be rejected and the same is notified to the author. the tunitin siftware is used to check the plagiarism percentge of both web and AI.<br /><br />In case a manuscript is found to be plagiarized after publication, the Editor-in-Chief will conduct preliminary investigation, may be with the help of a suitable committee constituted for the purpose. If the manuscript is found to be plagiarized beyond the acceptable limits, the journal will contact the author’s Institute / College / University and Funding Agency, if any.<br /><br /></div>
                <br />
                <div className="plagiarism-rules">
                    <div className='plagiarism-h'><h1>Plagiarism Guidelines</h1></div>
                    <div className='span'><h4>The following types of plagiarism are considered by us :</h4></div>

                    <div className="rule">
                        <h4>1. Full Plagiarism :</h4>
                        <p>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Previously published content that remains unchanged in text, ideas, or grammar is considered full plagiarism. This involves presenting exact text from a source as one’s own.
                        </p>
                    </div>

                    <div className="rule">
                        <h4>2. Partial Plagiarism :</h4>
                        <p>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; If content is derived from multiple sources and extensively rephrased without proper attribution, it is classified as partial plagiarism.
                        </p>
                    </div>

                    <div className="rule">
                        <h4>3. Self-Plagiarism :</h4>
                        <p>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;When an author reuses significant portions or entire sections of their previously published research, it is considered self-plagiarism. Republishing an entire previously published work in a new journal falls under complete self-plagiarism.
                        </p>
                    </div>

                    <div className="rule">
                        <h4>4.AI-Generated Research Content :</h4>
                        <p>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Plagiarism involves the unethical practice of using another person's work or ideas without proper credit. While AI-generated text can closely resemble human writing, AI lacks the ability to conduct original research, generate unique insights, or develop novel concepts. Relying solely on AI for research paper creation raises concerns about authenticity and originality.<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Therefore, any manuscript generated entirely or partially using AI tools without proper human oversight, critical analysis, and citation of sources will be considered a violation of ethical research practices.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Plagiarism;