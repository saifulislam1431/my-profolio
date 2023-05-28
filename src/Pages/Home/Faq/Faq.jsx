import React from 'react';

const Faq = () => {
    return (
        <section className='my-10 lg:my-14'>
             <div className='text-center'>
                    <p className='font-bold text-xl mb-3'> FAQ <span className='text-gradient'>Question</span></p>
                    <h1 className="text-2xl lg:text-3xl font-bold">Find your question before we work together</h1>
                </div>
            <div className='grid grid-cols-1 md:grid-cols-2 items-center justify-center px-3  gap-6 my-10'>
                <div className='space-y-5'>
                    <div tabIndex={0} className="collapse collapse-arrow shadow-lg bg-secondary bg-opacity-20 rounded-lg">
                        <input type="checkbox" />
                        <div className="collapse-title text-lg font-semibold border-b-2 border-b-primary">
                            What needs to be done to place order??
                        </div>
                        <div className="collapse-content">
                            <p className='mt-2 font-medium'>psd / png / jpg / pdf / any source file or reference link must be provided. If nothing else, tell me your needs, likes, or thoughts.</p>
                        </div>
                    </div>

                    <div tabIndex={0} className="collapse collapse-arrow shadow-lg bg-secondary bg-opacity-20 rounded-lg">
                        <input type="checkbox" />
                        <div className="collapse-title text-lg font-semibold border-b-2 border-b-primary">
                            I don't have PSD and JPG but i have idea.....
                        </div>
                        <div className="collapse-content">
                            <p className='mt-2 font-medium'>No problem, you will give me your idea and requirements of your website, in this case i'll help you to generate idea.</p>
                        </div>
                    </div>

                    <div tabIndex={0} className="collapse collapse-arrow shadow-lg bg-secondary bg-opacity-20 rounded-lg">
                        <input type="checkbox" />
                        <div className="collapse-title text-lg font-semibold border-b-2 border-b-primary">
                            How long will i take to handover your project?
                        </div>
                        <div className="collapse-content">
                            <p className='mt-2 font-medium'>It depends on the complexity of your project but I've team so, I'm capable to finish your project faster than anyone else.</p>
                        </div>
                    </div>
                </div>

                <div className='space-y-5'>
                    <div tabIndex={0} className="collapse collapse-arrow shadow-lg bg-secondary bg-opacity-20 rounded-lg">
                        <input type="checkbox" />
                        <div className="collapse-title text-lg font-semibold border-b-2 border-b-primary">
                            If i don't get my project according to my requirement?
                        </div>
                        <div className="collapse-content">
                            <p className='mt-2 font-medium'>Well It never happened. In this case i'll redesign for you if the design doesn't full fill your requirement.</p>
                        </div>
                    </div>

                    <div tabIndex={0} className="collapse collapse-arrow shadow-lg bg-secondary bg-opacity-20 rounded-lg">
                        <input type="checkbox" />
                        <div className="collapse-title text-lg font-semibold border-b-2 border-b-primary">
                            Do you use any automated software conversion??
                        </div>
                        <div className="collapse-content">
                            <p className='mt-2 font-medium'>Never! All codes are hand-typed code with well commented and W3C Validated.</p>
                        </div>
                    </div>

                    <div tabIndex={0} className="collapse collapse-arrow shadow-lg bg-secondary bg-opacity-20 rounded-lg">
                        <input type="checkbox" />
                        <div className="collapse-title text-lg font-semibold border-b-2 border-b-primary">
                            Will i get pixel perfect design?
                        </div>
                        <div className="collapse-content">
                            <p className='mt-2 font-medium'>Yes, You will get a pixel perfect and fresh design.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq;