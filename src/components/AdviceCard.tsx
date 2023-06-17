import { UseQueryResult, useQuery } from "@tanstack/react-query";
import "../styles/AdviceCard.css";
import { QueryAdvice, IAdvice } from "../fetchers/QueryAdvice";

export default function AdviceCard() {
  const { status, data, refetch, isFetching }: UseQueryResult<IAdvice> =
    useQuery<IAdvice>({
      queryKey: ["advice"],
      queryFn: QueryAdvice,
      refetchOnWindowFocus: false,
    });

  if (status === "loading")
    return <div className="advice-card">Loading...</div>;
  if (status === "error") return <div className="advice-card">Error</div>;
  return (
    <>
      <div className="advice-card">
        <div className="advice-card__content">
          <div className="advice-card__id">
            {isFetching ? (
              <h2 className="spinner" style={{ height: 10, width: 10 }}></h2>
            ) : (
              <h2>Advice #{data.id}</h2>
            )}
          </div>
          <div className="advice-card__advice">
            {isFetching ? (
              <div className="spinner" style={{ height: 30, width: 30 }}></div>
            ) : (
              <p>“{data.advice}”</p>
            )}
          </div>

          <img
            className="desktop-img"
            src="/pattern-divider-desktop.svg"
            alt="pattern-divider-desktop"
          />
          <img
            src="/pattern-divider-mobile.svg"
            alt="pattern-divider-mobile"
            className="mobile-img"
          />
        </div>
      </div>
      <button className="advice-card__button" onClick={() => refetch()}>
        <img src="/icon-dice.svg" alt="icon-dice" />
      </button>
      <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="https://github.com/Sanjoymajee">Sanjoy Majee</a>.
      </div>
    </>
  );
}
