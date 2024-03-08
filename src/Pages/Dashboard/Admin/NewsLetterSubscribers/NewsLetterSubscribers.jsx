import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";

const NewsLetterSubscribers = () => {
  const axiosPublic = useAxiosPublic();
  const {data: newsLetter=[]} = useQuery({
    queryKey: ['newsLetter'],
    queryFn: async () =>{
      const newsRes = await axiosPublic.get("/newsletter");
      return newsRes.data;
    }
  })
  return (
    <div className="my-10">
      <h2 className="text-center text-2xl font-bold my-10">NewsLetter Subcribers</h2>
      <table className="table text-xl">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            newsLetter.map((news, index) => <tr key={news._id}>
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                  <p>{news.email}</p>
                                </td>
                            </tr>)
                        }
                    </tbody>
                  </table>
    </div>
  )
}

export default NewsLetterSubscribers;
