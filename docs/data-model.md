# Proposed canonical data model

Status: a design sketch, not an implemented database schema.

| Record | Purpose | Key proposed fields |
| --- | --- | --- |
| Source item | Original report, post, or video | ID, URL, publisher/author, published time, retrieved time, source type, permitted evidence excerpt, content hash |
| Claim | Attributed assertion from a source | ID, source ID, statement, evidence locator, verification state, supporting/disputing claim links |
| Event | Development supported by reports | ID, event time/range, recorded time, claim IDs, entity IDs, topic IDs |
| Topic | Continuing thread | ID, name, scope, related topics, ordered event references |
| Entity | Person, organization, place, or concept | ID, names/aliases, source-backed relationships |
| Revision | Correction or changed interpretation | Record ID, previous version, new version, recorded time, reason, reviewer |
| Edition | Published or draft briefing | ID, audience type, cutoff time, version, segments, source/claim IDs, editorial state |
| Follow | Future user-topic preference | User reference, topic ID, desired depth; privacy/retention still to decide |
| Submission | Intake envelope | Submitter, collection method, collected time, source records, review state |

## Two clocks

Preserve **when an event occurred** and **when the system learned about it**. Also retain source publication and collection times. An edition should be reproducible using what was known at its cutoff, without silently incorporating later corrections.

## Relationships and embeddings

Proposed relationships include “report supports claim,” “claim describes event,” “event concerns entity,” and “event belongs to topic.” Every inferred relationship needs provenance or an inference label. Embeddings are derived representations with model/version metadata; similarity alone is not evidence.

## Questions to validate

How do we merge duplicate events without losing disagreement? How do we represent uncertain dates? What evidence can be retained and reused? How will corrections propagate into previously published editions?

See [architecture](architecture.md) and [roadmap](roadmap.md).

## Related work

- [Validate canonical records and vector/graph storage options](https://github.com/kaw393939/awareness-briefing/issues/4)
