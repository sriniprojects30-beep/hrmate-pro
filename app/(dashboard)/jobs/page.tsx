import { getJobs } from "@/app/actions/jobs";
import { JobList } from "@/components/jobs/job-list";

export default async function JobsPage() {
  const jobs = await getJobs();
  
  return <JobList initialJobs={jobs} />;
}
