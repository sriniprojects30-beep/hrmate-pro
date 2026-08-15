import { getCandidates } from "@/app/actions/candidates";
import { CandidateList } from "@/components/candidates/candidate-list";

export default async function CandidatesPage() {
  const candidates = await getCandidates();
  
  return <CandidateList initialCandidates={candidates} />;
}
