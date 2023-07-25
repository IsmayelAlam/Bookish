import { Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import SearchBar from "./components/SearchBar";
import Subject from "./pages/Subject";
import Bookmark from "./pages/Bookmark";
import About from "./pages/About";
import PageNotFound from "./pages/PageNotFound";
import Search from "./pages/Search";
import Author from "./pages/Author";
import Book from "./pages/Book";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 60 * 1000,
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Header />
      <SearchBar />
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="subject" element={<Subject />} />
        <Route path="bookmark" element={<Bookmark />} />
        <Route path="about" element={<About />} />
        <Route path="search" element={<Search />}>
          <Route path="author/id" element={<Author />} />
          <Route path="book/id" element={<Book />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
