import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./faq.scss";
import Form from "react-bootstrap/Form";
import Axios from "../../Service/Instance";
import LoadingImage from "../../Assets/Images/loading_Gif.gif";
import General from "./FAQ-Components/General";

export default function Faq() {
  const [faqData, setFaqData] = useState([]);
  const [isActiveId, setActiveId] = useState();
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);

  const FaqApi = async () => {
    try {
      setLoading(true);
      const FaqApiResponse = await Axios.get("web/questions");
      setFaqData(FaqApiResponse.data.data);
      setLoading(false);
      setQuestions(FaqApiResponse.data.data[0].questions);
      setActiveId(FaqApiResponse.data.data[0]._id);
    } catch (err) {
      console.log("error: ", err);
      setLoading(false);
    }
  };
  /**
     * 
    //  * @param {* in order to show active id  of particular item} id 
     * @param {* list of questionsSet @arr} arr 
     */
  const isSideBarActive = (id, arr) => {
    setQuestions(arr);
    setActiveId(id);
  };

  const SmallerScreenDropDown = (e) => {
    const filterItemById = faqData.filter(
      (item) => item._id === e.target.value
    );
    setQuestions(filterItemById[0].questions);
    setActiveId(filterItemById[0]._id);
  };

  useEffect(() => {
    FaqApi();
  }, []);

  if (loading) {
    return (
      <>
        <div className="loadingDiv">
          <img className="LoadingImage" src={LoadingImage} alt="" />
        </div>
      </>
    );
  }
  return (
    <>
      <Navbar />
      <div className="MainCommon">
        <div className="FAQSection">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="FaqHeadSec border-BottomClass">
                  <div className="FaqHeading">
                    <h1>FAQ</h1>
                  </div>
                  <div className="FaqPara">
                    <span>
                      Can't find an answer? Call us at{" "}
                      <a href=""> 207-358-9327</a> or email{" "}
                      <a href=""> info@waterfrontconcerts.com</a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="FaqTableSection">
                <div className="row">
                  <div className="col-md-3 ">
                    <div className="TableContent tabletVeiwHide">
                      <h5>Table of Contents</h5>
                      {faqData.map((item) => {
                        return (
                          <div className="TableContestList" key={item.id}>
                            <p
                              className={`${
                                isActiveId === item._id
                                  ? `feq-title-active`
                                  : `feq-title`
                              }`}
                              onClick={() =>
                                isSideBarActive(item._id, item.questions)
                              }
                            >
                              {item.name}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                    {/* Show's on mobile View */}
                    <div className="WebViewHide">
                      <Form.Select
                        aria-label="Default select example"
                        onClick={(e) => SmallerScreenDropDown(e)}
                      >
                        {faqData.map((item) => {
                          return (
                            <option
                              value={item._id}
                              key={item.id}
                              className={`${
                                isActiveId === item._id
                                  ? `feq-title-active`
                                  : `feq-title`
                              } `}
                            >
                              {item.name}
                            </option>
                          );
                        })}
                      </Form.Select>
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="AccordionsSec">
                      <General questions={questions} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
