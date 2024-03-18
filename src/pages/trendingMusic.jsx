import MusicLists from "../component/ui/MusicLists";

export default function TrendingMusic({ search }) {
  return <MusicLists type='trending' search={search} />
}
