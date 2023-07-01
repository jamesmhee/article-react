import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AddArticle from "../components/AddArticle";
import { ClipLoader } from "react-spinners";
import { HeartIcon } from "@heroicons/react/24/solid";
import { readData } from "../functions/functionArticle";
import { useParams } from "react-router-dom";

const Article = ({ loading }) => {
  const [article, setArticle] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    readData(id).then((res) => setArticle(res.data));
    console.log(article);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center mx-auto my-5">
      {loading ? (
        <div
          key={article.id}
          className="bg-slate-700 rounded text-white w-11/12 xs:w-7/12 h-auto p-5 mb-5 text-left shadow-0 shadow-slate-500 "
        >
          <p className="text-xl mb-2">{article.title}</p>
          <hr></hr>
          <p className="mt-3 mb-5 text-md truncate">{article.body}</p>
          <button>
            <p className="text-sm">
              <HeartIcon className="inline-flex h-6 w-6 text-red-600 mt-auto" />{" "}
              {article.like}
            </p>
          </button>
        </div>
      ) : (
        <ClipLoader color="orange" />
      )}
      <div className="bg-slate-700 rounded text-white w-11/12 xs:w-7/12 h-auto p-5 mb-5 text-left shadow-0 shadow-slate-500">
        <form>
          <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
            <div className="flex items-center justify-between px-3 py-2 border-b dark:border-gray-600">
              <div className="flex flex-wrap items-center divide-gray-200 sm:divide-x dark:divide-gray-600">
                <div className="flex items-center text-slate-800 space-x-1 sm:pr-4">
                    Tell me some thing
                </div>
              </div>
            </div>
            <div className="px-4 py-2 bg-white rounded-b-lg dark:bg-gray-800">
              <label htmlFor="editor" className="sr-only">
                Comments
              </label>
              <textarea
                id="editor"
                rows="8"
                className="block w-full px-0 text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                placeholder="Tell your feeling to this article..."
                required

              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
          >
            Comments
          </button>
        </form>
      </div>
    </div>
  );
};

export default Article;
