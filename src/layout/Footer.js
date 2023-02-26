import { faDatabase, faGear, faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
    return (
        <div class="px-4 py-5 border border-3 border-bottom-0 border-start-0 border-end-0" id="hanging-icons " 
      >
            <h2 class="pb-2 border-bottom">Hanging icons</h2>
            <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
                <div class="col d-flex align-items-start">
                    <div class="icon-square text-bg-light d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                    <FontAwesomeIcon icon={faGear} />
                    </div>
                    <div>
                        <h3 class="fs-2">Featured title</h3>
                        <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                        <a href="#" class="btn btn-primary">
                            Primary button
                        </a>
                    </div>
                </div>
                <div class="col d-flex align-items-start">
                    <div class="icon-square text-bg-light d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                    <FontAwesomeIcon icon={faDatabase} />
                    </div>
                    <div>
                        <h3 class="fs-2">Featured title</h3>
                        <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                        <a href="#" class="btn btn-primary">
                            Primary button
                        </a>
                    </div>
                </div>
                <div class="col d-flex align-items-start">
                    <div class="icon-square text-bg-light d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                    <FontAwesomeIcon icon={faScrewdriverWrench} />
                    </div>
                    <div>
                        <h3 class="fs-2">Featured title</h3>
                        <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                        <a href="#" class="btn btn-primary">
                            Primary button
                        </a>
                    </div>
                </div>
            </div>
        </div>

    )
};

export default Footer;